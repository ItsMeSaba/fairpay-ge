import monitor from "@/assets/images/monitor.png";
import womanYellowBlob from "@/assets/images/woman-yellow-blob.png";
import manYellowBlob from "@/assets/images/man-yellow-blob.png";
import { Hero } from "@/components/sections/hero/Hero";
import { TextAndImage } from "@/components/sections/text-and-image/TextAndImage";

export default function Index() {
  return (
    <div>
      <Hero />

      <TextAndImage
        image={manYellowBlob}
        title="რა არის Fairpay?"
        description="Fairpay არის პლატფორმა რომელიც სწორი კარიერული არჩევნის გაკეთებაში
            დაგეხმარება"
        reverse={true}
      />

      <TextAndImage
        image={womanYellowBlob}
        title="რას მთავაზობს Fairpay?"
        description="Fairpay საშუალებას გაძლევთ გასაუბრებაზე დროის ხარჯვის გარეშე გაიგოთ
            კომპანიაში არსებული პირობები"
      />

      <TextAndImage
        image={monitor}
        title="განვითარება"
        description="ამ ეტპაზე Fairpay განკუთვნილია მხოლოდ დეველოპერებისთვის/პროგრამისტებისთვის. წარმატების შემთხვევაში პრიორიტეტებში რჩება სხვა დარგების ინტეგრირება"
        reverse={true}
        imageClassName="w-[75%]"
      />
    </div>
  );
}
