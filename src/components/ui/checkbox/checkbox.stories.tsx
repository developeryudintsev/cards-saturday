import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkBox.tsx'


const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {

    args: {
        label: 'Click here',
        checked: true,
        disabled: false,
           },
}




//------------------------------------------------------------------------
// import { Meta, StoryObj } from '@storybook/react'
//
// import { Checkbox } from './checkBox.tsx'
//
// const meta = {
//     title: 'Components/Checkbox',
//     component: Checkbox,
//     tags: ['autodocs'],
//     argTypes: {},
// } satisfies Meta<typeof Checkbox>
//
// export default meta
// type Story = StoryObj<typeof meta>
//
// export const Primary: Story = {
//     //const [checked, setChecked] = React.useState('indeterminate')
//     args: {
//         label: 'Click here',
//         checked: true,
//         disabled: false,
//         onChange:()=>{}
//     },
// }

//---------------------------------------------------------------
// import { Meta, Story } from "@storybook/react";
// import {CheckBox, CheckboxProps} from '@/components/ui/index.ts';
// import { Control, useForm } from "react-hook-form";
// import { FormValues } from "@/components/auth/loginForm/loginForm.tsx";
//
//
// const meta: Meta<CheckboxProps> = {
//     title: "Components/CheckBox",
//     component: CheckBox,
//     tags: ["auto-docs"],
//     argTypes: {},
// };
// export default meta;
//
// type StoryArgs = {
//     control: Control<FormValues>;
//     disabled: false,
//   };
//
// type StoryType = Story<StoryArgs>;
//
//
// export const ClassicCheckBox: StoryType = (args) => {
//     const {
//         control,
//     } = useForm<FormValues>();
//
//     return <CheckBox
//         control={control}
//         name="example"
//         disabled={args.disabled}
//            />;
// };


//-------------------------------------------------
// import {Meta, StoryObj} from "@storybook/react";
// import {CheckBox} from '@/components/ui/index.ts'
//
// const meta = {
//     title: 'Components/CheckBox',
//     component: CheckBox,
//     tags: ['auto-docs'],
//     argTypes: {},
// } satisfies Meta<typeof CheckBox>
//
// export default meta
//
// type Story = StoryObj<typeof meta>
//
// export const ClassicCheckBox: Story = {
//     args: {
//         checked: true,
//         disabled: false,
//     },
// }