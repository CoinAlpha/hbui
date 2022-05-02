import tw, { styled, css } from 'twin.macro'

export const Button = styled.button(
  ({
    isSecondary,
    isInfo,
    isSuccess,
    isWarning,
    isDanger,
    isSmall,
    isTiny,
    isLarge,
    isExtraLarge,
    isDisabled,
    isUppercase,
    isGhost,
    iconColor,
  }) => [
    tw`flex`,
    tw`text-tertiary dark:text-tertiary! font-medium! text-[14px] `,
    tw`transition duration-100`,
    tw`border-2 border-primary hover:border-tertiary active:border-quaternary`,
    tw`bg-tertiary hover:bg-quaternary active:bg-quintenary`,
    tw`px-3 pt-[5px] pb-[5px] rounded-sm focus:outline-none`,
    css`
      font-family: 'Inter';
      align-items: center;
      justify-content: center;
      user-select: none;
      cursor: pointer;
      .icon-before * {
        margin-right: 10px;
        fill: ${iconColor ? iconColor : 'auto'};
      }
      .icon-after * {
        margin-left: 10px;
        fill: ${iconColor ? iconColor : 'auto'};
      }
    `,
    isUppercase && [
      css`
        text-transform: uppercase;
      `,
    ],
    isSmall && [tw`px-2 pt-[2px] pb-[1.5px] text-[13px]`],
    isTiny && [tw`px-1 pt-0 pb-0 text-[11px]`],
    isLarge && [tw`px-4 py-1.5 text-[16px]`],
    isSecondary && [
      tw`text-tertiary dark:text-secondary`,
      tw`bg-transparent hover:bg-transparent active:bg-tertiary`,
      tw`border-secondary hover:border-quaternary`,
    ],

    isSuccess && [
      tw`text-white dark:text-black`,
      tw`border-green hover:border-green active:border-green`,
      tw`bg-green hover:bg-success-hovered active:bg-success-active`,
    ],

    isInfo && [
      tw`text-white dark:text-black`,
      tw`border-blue hover:border-blue active:border-blue`,
      tw`bg-blue hover:bg-info-hovered active:bg-info-active`,
    ],

    isWarning && [
      tw`text-white dark:text-black`,
      tw`border-orange hover:border-orange active:border-orange`,
      tw`bg-orange hover:bg-warning-hovered active:bg-warning-active`,
    ],

    isDanger && [
      tw`text-white dark:text-black`,
      tw`border-red hover:border-red active:border-red`,
      tw`bg-red hover:bg-danger-hovered active:bg-danger-active`,
    ],

    isDisabled && [tw`pointer-events-none opacity-30`],
  ],
)
