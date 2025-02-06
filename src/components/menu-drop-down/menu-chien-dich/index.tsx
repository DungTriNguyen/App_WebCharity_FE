import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'src/components/ui/dropdown-menu'
import { Button } from 'src/components/ui/button'

const MENU_ITEMS = ['Quyên góp tiền', 'Đăng ký tình nguyện viên', 'Quyên góp và ĐKTNV']

export default function CustomizedMenus() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Chiến dịch</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' side='bottom' align='end'>
        {MENU_ITEMS.map((item, index) => (
          <React.Fragment key={index}>
            <DropdownMenuItem>{item}</DropdownMenuItem>
            {index < MENU_ITEMS.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
