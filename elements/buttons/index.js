import React, { useState } from 'react'
import tw, { styled, css } from 'twin.macro'
import CheckBox from '@hummingbot/hbui/assets/svgs/16x16/CheckBox'
import PowerSwitch from '@hummingbot/hbui/assets/svgs/16x16/PowerSwitch'
import KebabControl from '@hummingbot/hbui/assets/svgs/16x16/KebabControl'
import PlayButton from '@hummingbot/hbui/assets/svgs/16x16/PlayButton'
import StopButton from '@hummingbot/hbui/assets/svgs/16x16/StopButton'
import { TextInput } from '@hummingbot/hbui/elements/input'
import {
  P,
  PTiny,
  LabelTiny,
  PNano,
  Red,
  PSmall
} from '@hummingbot/hbui/elements/typography'
// import {
//   Button
// } from '@hummingbot/hbui/elements/buttons'
import {
  Section,
  Container,
  ItemsRow,
} from '@hummingbot/hbui/elements/layout'
import ComboBox from '@hummingbot/hbui/components/combobox/ComboBox'
import Modal from '../../ui/components/Modal'

import bots from '../../data/bots'
import exchangeItems from '../../data/exchanges'
import strategyItems from '../../data/strategies'
import tradingModeItems from '../../data/tradingmodes'
import tradingPairItems from '../../data/tradingpairs'
import regionItems from '../../data/regions'
import hostLocations from '../../data/hostlocations'
import activities from '../../data/activities'
import fileFormats from '../../data/fileformats'

bots.unshift({
  label: 'All bots',
  id: 0
})
activities.unshift({
  label: 'All activities',
  id: 0
})
exchangeItems.unshift({
  label: 'All exchanges',
  id: 0
})
tradingPairItems.unshift({
  label: 'All trading pairs',
  id: 0
})

function Table() {
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [selectedBot, setBot] = useState(bots[0])
  const [selectedActivity, setActivity] = useState(activities[0])
  const [selectedTradingPair, setTradingPair] = useState(tradingPairItems[0])
  const [selectedExchange, setExchange] = useState(exchangeItems[0])
  const [fileFormat, setFileFormat] = useState(fileFormats[0])
  return (
    <div tw='w-full'>
      <Section>
        { generating &&
          <Modal
            path='Reports > New report'
            closeFunction={setGenerating}
            content={
              <ModalContent
                setSavedKeys={setGenerated}
                setAddingKey={setGenerating}
              />
            }
          />
        }
        <Section tw='border-b py-xxs mb-2 border-secondary'>
          <Container>
            <ItemsRow tw='justify-between items-center'>
              <PSmall isMedium>Generate new report</PSmall>
              <div tw='flex items-center'>
                <ComboBox
                  tw='mr-xs'
                  items={bots}
                  selected={selectedBot}
                  setSelected={setBot}
                />
                <ComboBox
                  tw='mr-xs'
                  items={activities}
                  selected={selectedActivity}
                  setSelected={setActivity}
                />
                <ComboBox
                  tw='mr-xs'
                  items={tradingPairItems}
                  selected={selectedTradingPair}
                  setSelected={setTradingPair}
                />
                <ComboBox
                  tw='mr-xs'
                  items={exchangeItems}
                  selected={selectedExchange}
                  setSelected={setExchange}
                />
                <ComboBox
                  tw='mr-xs'
                  items={fileFormats}
                  selected={fileFormat}
                  setSelected={setFileFormat}
                />
                <Button isSuccess isSmall onClick={() => setGenerating(true)}>
                  Generate
                </Button>
              </div>
            </ItemsRow>
          </Container>
        </Section>
        <Container>
          <P isMedium tw='mt-xs'>Past reports</P>
          <TableHeaders />
          <BotsList>
            <RowComponentA />
            { generated &&
              <RowComponentB />
            }
          </BotsList>
        </Container>
      </Section>
    </div>
  )
}

export default Table

export const Headers = styled.div(() => [
  tw`w-full flex py-2.5 px-xs my-xxs`,
  tw`items-center`,
])

export function TableHeaders({ children }) {
  return (
    <Headers>
      <PNano tw='w-1/6 text-quaternary!' isLabel isMedium>Date</PNano>
      <PNano tw='w-1/6 text-quaternary!' isLabel isMedium>Name</PNano>
      <PNano tw='w-1/6 text-quaternary!' isLabel isMedium>Portfolio</PNano>
      <PNano tw='w-1/6 text-quaternary!' isLabel isMedium>File type</PNano>
      <PNano tw='w-1/6 text-quaternary!' isLabel isMedium>Status</PNano>
      <PNano tw='w-1/6 text-quaternary!' isLabel isMedium tw='opacity-0'>_</PNano>
    </Headers>
  )
}

export const BotsList = styled.div(() => [
  tw`w-full flex flex-col`,
])

export const TableRow = styled.div(() => [
  tw`w-full mb-xxs bg-primary`,
  tw`flex items-center justify-between`,
  tw`px-xs py-4 mb-3`,
  tw`shadow rounded-md`,
])

export function RowComponentA({ children }) {
  return (
    <TableRow>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>02/12/22 22:22</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>My report #1</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>Portfolio #1</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>CSV</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>Completed</PSmall>
      </div>
      <div tw='w-2/12 flex items-center justify-end'>
        <Button isSmall>
          Download
        </Button>
      </div>
    </TableRow>
  )
}

export function RowComponentB({ children }) {
  return (
    <TableRow>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>02/12/22 22:22</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>My report #2</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>Portfolio #1</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>CSV</PSmall>
      </div>
      <div tw='w-2/12 flex items-center'>
        <PSmall isMedium>Completed</PSmall>
      </div>
      <div tw='w-2/12 flex items-center justify-end'>
        <Button isSmall>
          Download
        </Button>
      </div>
    </TableRow>
  )
}

function ModalContent({item, setAddingKey, setSavedKeys}) {
  const [reportName, setReportName] = useState('')
  const [keyCode, setKeyCode] = useState('')
  const [apiSecret, setApiSecret] = useState('')
  const [selectedRegion, setRegion] = useState(regionItems[0])
  return (
    <div>
      <LabelTiny tw='text-quaternary mb-xxs'>Report name <Red>*</Red></LabelTiny>
      <TextInput
        onChange={e => setReportName(e.target.value)}
        value={reportName}
        placeholder="Untitled report"
        tw='mb-xs'
      />
      
      <div tw='w-full flex justify-between items-center mb-xs'>
        <PSmall>Bots</PSmall>
        <Pill isLabel>All bots</Pill>
      </div>
      
      <div tw='w-full flex justify-between items-center mb-xs'>
        <PSmall>Activities</PSmall>
        <Pill isLabel>All activities</Pill>
      </div>
      
      <div tw='w-full flex justify-between items-center mb-xs'>
        <PSmall>Trading pairs</PSmall>
        <div tw='flex'>
          <Pill isLabel tw='mr-xxs'>BTC - USDT</Pill>
          <Pill isLabel>BUSD - BCH</Pill>
        </div>
      </div>
      
      <div tw='w-full flex justify-between items-center mb-xs'>
        <PSmall>Exchanges</PSmall>
        <Pill isLabel>All exchanges</Pill>
      </div>
      
      <div tw='w-full flex justify-between items-center mb-xs'>
        <PSmall>File type</PSmall>
        <Pill isLabel>CSV</Pill>
      </div>
      
      <div tw='w-full flex justify-between items-center mb-lg'>
        <PSmall>Date range</PSmall>
        <Pill isLabel>15/09/2021 — 20/09/2021</Pill>
      </div>

      <ItemsRow tw='justify-end'>
        <Button onClick={() => setAddingKey(false)}>
          Cancel
        </Button>
        <Button isSuccess onClick={() => {setAddingKey(false); setSavedKeys(true);}}>
          Generate
        </Button>
      </ItemsRow>
    </div>
  )
}

const Pill = styled(PSmall)(({}) => [
  tw`text-primary bg-black p-1 rounded`,
])

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
    tw`text-tertiary text-[14px] font-medium`,
    tw`transition duration-100`,
    tw`border-2 border-primary hover:border-tertiary active:border-quaternary`,
    tw`bg-tertiary hover:bg-quaternary active:bg-quintenary`,
    tw`px-3 pt-[5px] pb-[5px] rounded focus:outline-none`,
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
