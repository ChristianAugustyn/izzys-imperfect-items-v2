import { navigate } from 'gatsby'
import _ from 'lodash'
import React, { FC } from 'react'

interface Props {
    path: string,
    className?: string
}

const Divider = () => (
    <span className="mx-5 text-gray-500 dark:text-gray-300">
        /
    </span> 
)

const toPath = (splitPath: string[], p: string): string => {
    return ([...splitPath.slice(0, splitPath.indexOf(p) + 1)].join('/'))
}

const BreadCrumb: FC<Props> = ({ path, className }) => {
    const splitPath = path.split('/');
    return (
        <div className={`flex items-center justify-center lg:justify-start py-4 flex-wrap ${className}`}>
            <a className="text-gray-400 dark:text-gray-200 cursor-pointer" onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </a>
            {
               splitPath.filter(s => s != '' && s != null).map(s => (
                    <>
                        <Divider/>
                        <a className="text-gray-400 dark:text-gray-200 hover:underline cursor-pointer" onClick={() => navigate(toPath(splitPath, s))}>
                            {_.upperFirst(s)}
                        </a>
                    </>
                ))
            }
        </div>
    )
}

export default BreadCrumb