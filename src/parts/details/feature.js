import React from 'react';
import formatThousand from 'src/parts/helpers/formatThousand';

export default function feature({data}) {
    return (
        <div>

            <div className="border border-gray-300 bg-white p-6 w-full md:w-1/3" style={{ width:290}}>
                  <div className="flex">
                        <div className="w-auto">
                             {data.icon}
                        </div>
                        <div className="ml-5">
                         <span className="text-gray-600 block">{data.meta}</span>
                         <span className="text-gray-900 text-3xl">
                                    {
                                        typeof data.value === "number" ? formatThousand(data.value) : data?.value
                                    }
                         </span>
                        </div>
                    </div>
            </div>

        </div>
    )
}
