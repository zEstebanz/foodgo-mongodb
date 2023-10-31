import React from 'react'

function Blog() {
    return (
        < div className="container mx-auto mt-8" >
                <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src="blog-post-1.jpg" alt="Blog Post 1" className="w-full h-48 object-cover rounded" />
                    <h2 className="text-xl font-semibold mt-4">Título del Post 1</h2>
                    <p className="text-gray-600">Descripción breve del primer post.</p>
                    <a href="blog-post-1.html" className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Leer Más</a>
                </div>
            </div>
        </div >
    )
}

export default Blog