import Image from "next/image";

export default function Coffee() {
  return (
    <div>
      <a href="https://buymeacoffee.com/surajit_07" target="_blank">
        <Image
          src="/coffee.svg"
          alt="Buy Me A Coffee"
          height={33}
          width={120} />
      </a>
    </div>
  )
}