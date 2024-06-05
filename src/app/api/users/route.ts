import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import User from '@/models/user';

export async function GET(req: NextRequest) {
    await connectDB();  // Ensure database is connected

    try {
        const people = await User.find();  // Fetch data from the database
        return NextResponse.json(people, { status: 200 });  // Return response with status 200
    } catch (error) {

        const errorMessage = (error as Error).message;
        return NextResponse.json({ message: 'Server Error', error: errorMessage }, { status: 500 });  // Handle and return errors
    }
}
