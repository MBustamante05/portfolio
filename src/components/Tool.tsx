
type Props = {
  language: string
}
function Tool({ language }: Props) {
  return (
    <div className="bg-primary rounded-full text-white px-4 py-2">{language}</div>
  )
}

export default Tool