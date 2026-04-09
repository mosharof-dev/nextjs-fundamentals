import Link from 'next/link';
import React from 'react';

const UserPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
    return (
<div>
<h1>User Management</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {users.map(user => (
    <div 
      key={user.id} 
      className="card bg-base-100 shadow-lg border border-base-200 hover:shadow-2xl transition-shadow duration-300 w-full"
    >
      <div className="card-body p-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title text-xl font-bold text-primary">
              {user.name}
            </h2>
          </div> 
        </div> {/* <- Ei duti closing tag missing chilo */}

        {/* Actions */}
        <div className="card-actions justify-end mt-5">
          {/* Next.js er Link component */}
          <Link href={`/users/${user.id}`} className="btn btn-outline btn-primary btn-sm">
            View Profile
          </Link>
          <button className="btn btn-primary btn-sm">Message</button>
        </div>

      </div>
    </div>
  ))}
</div>

        </div>
    );
};

export default UserPage;