import Image from "next/image"

export default function Home() {
  return (
    <div className="flex-col items-center justify-center w-full">
      <Image src='/landing.png' width={400} height={10} alt="landing page image" className="w-full h-100 object-cover"/>

      <div>
<h3>major contents to be included</h3>
      <ul>
        <li>history of transactions</li>
        <li>list of students paid this month</li>
        <li>list of students didn't pay yet</li>
        <li>manage students</li>
        <li>register students</li>
      </ul>
      </div>

    
    </div>
  );
}
