
type Props = {
  language: string
}
function Tool({ language }: Props) {
  return (
    <div className="bg-primary sm:text-base text-sm rounded-full text-white px-4 sm:py-2 py-1">{language}</div>
  )
}

export default Tool