import PImg from '../assets/img/brock-wegner.png'

const ProfileCard = () => {
    return (
        <div className="max-w-2xl h-fit md:mx-auto lg:ml-80 bg-white shadow-lg rounded-lg overflow-hidden mt-20">
            <div className="flex items-center justify-between flex-row p-4">
                <img
                    className="w-16 h-16 rounded-full lg:mr-[-17rem]"
                    src={PImg}
                    alt="Profile"
                />
                <h2 className="whitespace-nowrap text-xl font-medium">Kabir Akinola</h2>
                <div className="">
                    <button className="mt-2 bg-red-600 text-white py-2 px-7 text-base whitespace-nowrap rounded-xl">Edit profile</button>
                </div>
            </div>
            <div className="px-4 py-2">
                <h3 className="font-medium text-2xl">Personal details</h3>
                <div className="mt-2">
                    <div className='flex items-center justify-between'>
                        <div className="flex justify-between flex-col">
                            <span className="font-normal text-lg text-gray-500">First name</span>
                            <span className='text-xl font-normal text-black'>Kabir</span>
                        </div>
                        <div className="flex justify-between mt-5 flex-col">
                            <span className="font-normal text-lg text-gray-500">Last name</span>
                            <span className='text-xl font-normal text-black'>Akinola</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="flex justify-between mt-5 flex-col">
                            <span className="font-normal text-lg text-gray-500">Country of residence</span>
                            <span className='text-xl font-normal text-black'>United Kingdom</span>
                        </div>
                        <div className="flex justify-between mt-5 flex-col">
                            <span className="font-normal text-lg text-gray-500 text-right">Email address</span>
                            <span className='text-xl font-normal text-black'>Kabirakinola@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-2">
                <h3 className="mt-10 font-medium text-2xl text-black">Transaction limits</h3>
                <div className="mt-5 mb-7 flex justify-between">
                    <div className="flex justify-between flex-col">
                        <span className="font-normal text-lg text-gray-500">Daily limit</span>
                        <span className='text-xl font-normal text-black'>20,000 UK</span>
                    </div>
                    <div className="flex justify-between mt-1 flex-col">
                        <span className="font-normal text-lg text-gray-500">Yearly limit</span>
                        <span className='text-xl font-normal text-black'>1,000,000 UK</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;