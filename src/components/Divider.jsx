const Divider = () => <div className="hidden md:block w-px h-10 bg-gray-300" />
  

const IconWithDivider = ({ icon: Icon }) => <div className="flex items-center"><Icon className="w-5 h-5 text-gray-400" /></div>


const Divider2 = () => <div className="h-5 w-px bg-gray-200 mx-2" />;


export {Divider , Divider2 , IconWithDivider}