import Image from 'next/image';
import Gym from '../../../public/gym.jpg';

export default function ImageSection() {
  return (
    <div>
      <Image src={Gym} width={600} height={600} className="rounded-l-lg" />
    </div>
  );
}