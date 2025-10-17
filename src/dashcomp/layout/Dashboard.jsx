import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Home from '../Home'
import TransactionHistory from "../TransactionHistory";
import Beneficiary from "../Beneficiary";
import AccountLimits from "../AccountLimits";
import Profile from "../Profile";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeContent, setActiveContent] = useState('home');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleLinkClick = (content) => {
        setActiveContent(content);
    }

    return (
        <div className='flex bg-gray-200 min-h-screen'>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onLinkClick={handleLinkClick}
            />
            <main className="flex-1 p-6 lg:p-12">
                {/* Dynamically rendering content based on the active content */}
                {activeContent === 'home' && <Home />}
                {activeContent === 'history' && <TransactionHistory />}
                {activeContent === 'beneficiary' && <Beneficiary />}
                {activeContent === 'account' && <AccountLimits />}
                {activeContent === 'profile' && <Profile />}
            </main>
        </div>
    )
}

export default Dashboard;