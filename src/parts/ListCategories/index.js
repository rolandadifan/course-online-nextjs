import React from 'react';
import RenderItem from './RenderItem';

import Group1 from 'public/images/Group-4.svg';
import Group2 from 'public/images/Group-5.svg';
import Group3 from 'public/images/Group-6.svg';
import Group4 from 'public/images/Group-7.svg';
import Group5 from 'public/images/Group-8.svg';
import Group6 from 'public/images/Group.svg';

export default function index() {

    const data = [
        {
            imageName: <Group1/>,
            name: "Development",
            total: 12345
        },
        {
            imageName: <Group2/>,
            name: "UI/UX",
            total: 12345
        },
        {
            imageName: <Group3/>,
            name: "Advertisement",
            total: 12345
        },
        {
            imageName: <Group4/>,
            name: "Game Development",
            total: 12345
        },
        {
            imageName: <Group5/>,
            name: "Travel Guidance",
            total: 12345
        },
        {
            imageName: <Group6/>,
            name: "Customer Relationship",
            total: "12345 Course"
        },

    ]
    return (
        <>
            <div className="flex justify-between items-center">
            <div className="w-auto">
                <h2 className="text-lg text-gray-600">Category</h2>
                <h3 className="text-xl text-gray-900">
                    Explore & <span className="text-teal-400">Learn</span>
                </h3>
            </div>
        </div>
        <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
            {
                data?.length > 0 ? data.map((item,index) => {
                    return <RenderItem item={item} key={index}></RenderItem>
                }) : <div className="w-full text-center-py-12">No Item Found</div>
            }
        </div>
        </>
    )
}
