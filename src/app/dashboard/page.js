import { redirect } from 'next/navigation';

const page = () => {
    redirect('/dashboard/users');

    return null;
  }
  
  export default page