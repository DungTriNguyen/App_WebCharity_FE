import * as React from 'react'
import { Button } from 'src/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'src/components/ui/dropdown-menu'

const MENU_ITEMS = ['Thông tin chung', 'Hướng dẫn quyên góp', 'Chính sách bảo mật', 'Liên hệ']

export default function CustomizedMenus() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Về chúng tôi</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' side='bottom' align='end'>
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
