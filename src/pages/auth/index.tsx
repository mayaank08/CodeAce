import Image from 'next/image';
import { authModalState } from '@/atoms/authModalAtom';
import {useRecoilValue} from "recoil";
import Navbar from '@/components/Navbar/Navbar/Navbar';
import AuthModal from '@/components/Navbar/Modals/AuthModal';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type indexProps = {
    
};

const Authpage:React.FC<indexProps> = () => {
    const authModal = useRecoilValue(authModalState);
    const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) return null;

    
    return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
       < div className='max-w-7xl mx-auto' >
        <Navbar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
					<Image src='/hero.png' alt='Hero img' width={700} height={700} />
				</div>
            authModal.isOpen && <AuthModal />
         </div>
         </div>
    );
};
export default Authpage;