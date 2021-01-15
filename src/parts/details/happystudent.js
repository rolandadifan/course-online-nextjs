import React from 'react';
import Star from 'src/component/star'

export default function happystudent({data}) {
    return (
        <div className="mt-8">
            <Star value={data?.rating ?? "0"} width={26} height={26}></Star>
            <p className="text-gray-600 mt-1">{data?.note ?? "student response"}</p>
            <div className="flex items-center mt-4">
                <div className="w-12 rounded-full overflow-hidden">
                    <img src={data?.users?.avatar ?? "https://placebeard.it/640x360"} alt="user avatar" className="object-cover w-12 h-12"/>
                </div>
                <div className="ml-4">
                    <h2 className="text-lg text-gray-900">
                        {data?.users?.name ?? "student name"}
                    </h2>
                    <h3 className="text-s, text-gray-900">
                        {data?.users?.name ?? "student role"}
                    </h3>
                </div>
            </div>
        </div>
    )
}
