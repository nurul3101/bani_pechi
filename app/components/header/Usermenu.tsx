"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";

// import { SafeUser } from "@/app/types/";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const closeUserMenuLogin = useCallback(() => {
    setIsOpen((value) => !value);
    loginModal.onOpen();
  }, [loginModal, setIsOpen]);

  const closeUserMenuRegister = useCallback(() => {
    setIsOpen((value) => !value);
    registerModal.onOpen();
  }, [registerModal, setIsOpen]);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-green-middle text-sm font-semibold py-3 px-4 hover:bg-white-1 transition cursor-pointer"
        >
          {/* {currentUser ? <>{currentUser.name}</> : <>Пользователь</>} */}
          {currentUser ? <>{currentUser.name}</> : <></>}
        </div>
        <div
          onClick={toggleOpen}
          className="p-3 md:py-1 md:px-2 gap-3 flex flex-row items-center rounded-md cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu color="#F8F8F8" size="40px" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute gap-3 rounded-md shadow-md w-60 bg-white-1 overflow-hidden right-0 top-14 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={signOut} label="Выход" />
              </>
            ) : (
              <>
                <MenuItem onClick={closeUserMenuLogin} label="Войти" />
                <MenuItem onClick={closeUserMenuRegister} label="Регистрация" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
