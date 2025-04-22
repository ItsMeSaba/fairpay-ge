import monitor from '@/assets/images/monitor.png';
import womanYellowBlob from '@/assets/images/woman-yellow-blob.png';
import manYellowBlob from '@/assets/images/man-yellow-blob.png';
import { Hero } from '@/components/sections/hero/Hero';
import { TextAndImage } from '@/components/sections/text-and-image/TextAndImage';

export default function Index() {
  return (
    <div>
      <Hero />

      <TextAndImage
        image={manYellowBlob}
        title="მიიღე გადაწყვეტილება მარტივად"
        description="Fairpay გაძლევს შესაძლებლობას გაიგო რეალური ინფორმაცია ხელფასებზე, პოზიციებზე და სამუშაო გარემოზე — უშუალოდ თანამშრომლებისგან."
        reverse={true}
      />

      <TextAndImage
        image={womanYellowBlob}
        title="დაზოგე დრო"
        theme="light-red"
        description="თავიდან აირიდე დროის ფლანგვა არასასურველ კომპანიებზე."
      />

      <TextAndImage
        image={monitor}
        title="ანონიმური ინფორმაცია"
        description="გაუზიარე რეალური გამოცდილება ანონიმურად — დაეხმარე სხვებსაც და საკუთარ თავსაც გააზრებული არჩევანის გაკეთებაში."
        reverse={true}
        imageClassName="w-[75%]"
      />
    </div>
  );
}
