import {NextResponse} from 'next/server'

export function GET(){
    return NextResponse.json({
        message: 'hello form get api'
    })
}

export function POST(){
    return NextResponse.json({
        message: 'hello from post api'
    })
}