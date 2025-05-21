export default function Account() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
      <div className="flex items-start space-x-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-sm">Marry Doe</h3>
          <p className="text-sm text-gray-500 mb-2">Marry@Gmail.Com</p>
          <p className="text-sm text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  )
}
