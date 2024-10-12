export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-around p-10 text-center sm:text-left">
        <div className="w-[300px] p-5">
          <span className="text-2xl font-bold text-orange-400">Blossom</span>
          <p className="mt-3">
            Blossom is your personal flower guide. Join us and learn more about
            flowers with us
          </p>
        </div>
        <ul className="leading-10">
          <span>
            <li className="font-semibold">Social Links</li>
          </span>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex items-center justify-center py-5">
        &copy; 2024 Blossom. All Rights Reserved.
      </div>
    </footer>
  );
}
