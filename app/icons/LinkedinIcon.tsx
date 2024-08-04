import { ComponentPropsWithoutRef } from "react"
export function LinkedinIcon(
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) {
  return (
    <svg
      width={props.size}
      height={props.size}
      enable-background='new 0 0 112.196 112.196'
      viewBox='0 0 112.196 112.196'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='56.098' cy='56.097' fill='#007ab9' r='56.098' />
      <path
        d='m89.616 60.611v23.128h-13.409v-21.578c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77h13.405v-40.33h-13.405z'
        fill='currentColor'
      />
    </svg>
  )
}
