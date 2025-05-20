"use client"

import { BrushIcon, CodeIcon, DatabaseIcon, FileTextIcon, LayoutIcon, LinkIcon} from 'lucide-react';

export default function Services() {
    return (
        <div>
        <h1 className="text-center py-5 text-2xl">SERVICES</h1>
        <div className="flex flex-wrap justify-around p-4 gap-4">
            <div className="text-4xl w-1/4 border rounded-xl p-3">
            <div className="flex justify-center"><CodeIcon /></div>
                <p className="py-4 text-center">Web Development</p>
                
                
            </div>
            <div className="text-4xl w-1/4 border rounded-xl p-3">
            <div className="flex justify-center"><LayoutIcon /></div>
                <p className="py-4 text-center">Front-End Development</p>
                
            </div>
            <div className="text-4xl w-1/4 border rounded-xl p-3">
            <div className="flex justify-center"><BrushIcon /></div>
                <p className="py-4 text-center">UI/UX Design</p>
                
            </div>
            <div className="text-4xl w-1/4 border rounded-xl p-3">
            <div className="flex justify-center"><DatabaseIcon /></div>
                <p className="py-4 text-center">Back-End Development</p>
                
            </div>
            <div className="text-4xl w-1/4 border rounded-xl p-3">
            <div className="flex justify-center"><LinkIcon /></div>
                <p className="py-4 text-center">API Development</p>
                
            </div>
            <div className="text-4xl w-1/4 border rounded-xl p-3">
            <div className="flex justify-center"><FileTextIcon /></div>
                <p className="py-4 text-center">Technical Writing</p>
                
            </div>
        </div>

    </div>
    )
}
