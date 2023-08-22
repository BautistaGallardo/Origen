import {NextResponse} from 'next/server'
import bcrypt from "bcryptjs";

export function GET() {
  return NextResponse.json({
    message: "hello form get api",
  });
}

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  console.log(name, email, password);

  if (!password || password.length < 6) {
    return NextResponse.json(
      {
        message: "Password must be at least 6 characters",
      },
      {
        status: 400,
      }
    );
  }

  // comentado porque el User no retorna nada
  // falta llamar a la conexion de la base de datos 
  /*
    try{
        const userFound = await User.findOne({email})

    if(userFound){
       return NextResponse.json({
        message: "Email already exists"
       },{
        status : 400
       }) 
    }

    const hashedPassword = await bcrypt.hash(password,12)

    const user = new User(){
        email,
        name, 
        password : hashedPassword
    }
    const savedUser = await user.save()
    console.log(savedUser)

    return NextResponse.json(savedUser)
    }
    catch(error){
        console.log(error)

        if(error instanceof Error){
            return NextResponse.json({
            message: error.message
        },{
            status : 400
        })
        }
    }
    */
}