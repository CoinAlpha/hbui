import tw, { styled, css } from 'twin.macro'

function Checkbox({active, ...props}) {
  return (
    <CheckboxRoot
      active={active}
      className={active ? 'is-active' : 'is-off'}
      {...props}
    >
      { active && <CheckIcon /> }
    </CheckboxRoot>
  );
}

const CheckboxRoot = styled.div(({ active }) => [
  tw`cursor-pointer h-[16px] w-[16px] rounded-sm flex justify-center! items-center!`,
  tw`bg-primary relative border-2 border-secondary hover:border-green`,
  active && [
    tw`bg-green relative border-2 border-green`,
  ],
])

function CheckIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="9"
      fill="none"
      viewBox="0 0 10 9"
    >
      <path stroke="#151819" d="M1 4.5L4.2 8 9 1"></path>
    </svg>
  );
}

export default Checkbox