import {NextRequest, NextResponse} from 'next/server'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import {serialize} from 'cookie'
import { setCookie } from 'cookies-next';

export async function POST(req: NextRequest){
  
  const {email, password} = await req.json()
  // check validation of data 
  if (!email || !password) {
    return NextResponse.json({
      message: 'el email y la contraseña son requeridos' 
    },{
      status:404
    });
  }


  // create token (por ahora hardcode)
  const token = jwt.sign({
    exp: Math.floor(Date.now()/1000) + 60 * 60 * 24 * 30,
    email:'bautistaggallardo@hotmail.com',
    password: '123456'

  },'secret')


  const serializeToken = serialize('UserToken',token,{
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 30, 
    path: '/', 
  }) 

  // set token header
  setCookie("jwt", serializeToken, { maxAge: 60 * 60 * 24 });
  
  return NextResponse.redirect('/src/app/homepage')

}
