type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  children: React.ReactNode
}

export default function Button({ size='medium', shape='rounded-md', children }: ButtonProps) {
  const sizeClass = size === 'small' ? 'px-2 py-1 text-sm' : size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2'
  return (
    <button className={`${sizeClass} ${shape} bg-gray-800 text-white`}>{children}</button>
  )
}
