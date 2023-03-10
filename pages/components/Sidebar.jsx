import { useSession } from 'next-auth/react'
import React from 'react'
import SidebarRow from './SidebarRow'
import { UserGroupIcon, ShoppingBagIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { ClockIcon, ComputerDesktopIcon, UsersIcon, CalendarIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {

    const { data: session, loading } = useSession()
    return (
        <div className='p-2 mt-2 flex flex-col gap-1 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar