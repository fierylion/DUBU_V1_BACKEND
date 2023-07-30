import {ChampionModal, IChampion}from '../../models/Champion'
import {UserModal, IUser} from '../../models/User'
import { RegistrationBodyTypes } from './championTypes'

import { Express, Request, Response } from 'express'
import { BadRequestError } from '../../errors'
import { messageForEmptyFields } from '../commonFunctions'
const registerChampion = async (req: Request, res: Response) => {
    let obtainedData: RegistrationBodyTypes = req.body;
    const { fname, lname, email, phone, password } = obtainedData;
    const errorMessage = messageForEmptyFields({fname, lname, email, phone, password});
    if (errorMessage) {
      throw new BadRequestError(errorMessage);
    }
    let user:IUser|null = await UserModal.findOne({ phone });
    
    if (!user) {
      user= await UserModal.create({ fname, lname, phone
       });
    }
    
    const champion:IChampion = await ChampionModal.create({
      user_id: user._id,
      email,
      password
    });
    res.status(201).json({ status: 'success', data:
      { id: champion._id, user_id: champion.user_id, email: champion.email }});
  } 
  export {registerChampion};