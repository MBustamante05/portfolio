type Props = {
  tool: string
}
function Technology({ tool }: Props) {
  return (
    <div className="bg-neutral rounded-lg text-white px-4 py-1">{tool}</div>
  )
}

export default Technology