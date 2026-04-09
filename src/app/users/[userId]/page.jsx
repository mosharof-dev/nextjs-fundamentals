import Link from 'next/link';


export const metadata = {
  title: 'User Details',
  description: 'View detailed information about each user in our system.',
}
const UserDetails = async ({ params }) => {
  const { userId } = await params;
  
  // Fetch user details based on userId
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
 
  const user = await res.json(); 
        
  return (
    <div className="p-4 flex justify-center">
      
      <div className="card bg-base-100 shadow-lg border border-base-200 hover:shadow-2xl transition-shadow duration-300 w-full max-w-xl">
        <div className="card-body p-6">
          
          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="card-title text-xl font-bold text-primary">
                {user.name}
              </h2>
              <span className="badge badge-neutral text-xs mt-1">@{user.username}</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-4 space-y-2 text-sm text-base-content/80">
            <p className="flex items-center gap-2">
              <span>📧</span> {user.email}
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span> {user.phone.split(' ')[0]}
            </p>
            <p className="flex items-center gap-2">
              <span>🌐</span> 
              <a 
                href={`https://${user.website}`} 
                target="_blank" 
                rel="noreferrer" 
                className="link link-hover text-info"
              >
                {user.website}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span> {user.address?.suite}, {user.address?.street}, {user.address?.city}
            </p>
          </div>

          <div className="divider my-1"></div>

          {/* Company Info */}
          <div className="text-sm">
            <p className="font-semibold text-base-content">🏢 {user.company?.name}</p>
            <p className="text-xs italic text-base-content/60 mt-1">
              {user.company?.catchPhrase}
            </p>
          </div>

          {/* Actions */}
          <div className="card-actions justify-end mt-5">
           
            <Link href="/users" className="btn btn-outline btn-primary btn-sm">
              Back to Users
            </Link>
            <button className="btn btn-primary btn-sm">Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;