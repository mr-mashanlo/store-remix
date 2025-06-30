import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Form, NavLink, useSearchParams } from '@remix-run/react';
import { ChangeEvent, FC, useState } from 'react';

const StoreControls: FC = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ searchParams, setSearchParams ] = useSearchParams();
  const search = searchParams.get( 'search' );

  const handleSearchInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const params = new URLSearchParams( searchParams );
    const value = e.target.value.trim();

    if ( value.length ) {
      params.set( 'search', value );
    } else {
      params.delete( 'search' );
    }

    setSearchParams( params, { replace: true, preventScrollReset: true } );
  };

  return (
    <>
      <div className="bg-neutral-200/50 backdrop-blur-xs rounded-full flex fixed bottom-5 left-1/2 -translate-x-1/2">
        <button onClick={() => setIsOpen( true )} className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-neutral-200">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M4,17h8.1c0.4,1.7,2,3,3.9,3s3.4-1.3,3.9-3H20c0.6,0,1-0.4,1-1s-0.4-1-1-1h-0.1c-0.4-1.7-2-3-3.9-3s-3.4,1.3-3.9,3H4 c-0.6,0-1,0.4-1,1S3.4,17,4,17z M16,14c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,14,16,14z"/>
            <path d="M4,9h0.1c0.4,1.7,2,3,3.9,3s3.4-1.3,3.9-3H20c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8.1c-0.4-1.7-2-3-3.9-3S4.6,5.3,4.1,7H4 C3.4,7,3,7.4,3,8S3.4,9,4,9z M8,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S6,9.1,6,8S6.9,6,8,6z"/>
          </svg>
        </button>
        <NavLink to="/cart" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-200 aria-[current=page]:bg-black aria-[current=page]:fill-white ">
          <span className="sr-only">Cart</span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M20.5,6.4C19.8,5.5,18.8,5,17.7,5H6.2L6,3.8C5.9,3.4,5.5,3,5,3H3C2.4,3,2,3.4,2,4s0.4,1,1,1h1.2l0.2,1.2c0,0,0,0,0,0 l1.2,7c0,0,0,0,0,0l0.2,1.2C6,15.9,7.3,17,8.8,17h9.6c0.6,0,1-0.4,1-1s-0.4-1-1-1H8.8c-0.5,0-1-0.4-1.1-0.9l0-0.1h9.4 c1.6,0,2.9-1,3.4-2.5l0.6-2C21.4,8.4,21.1,7.3,20.5,6.4z M19.1,8.9C19.1,8.9,19.1,8.9,19.1,8.9l-0.6,2c-0.2,0.6-0.8,1.1-1.4,1.1 H7.3L6.5,7h11.2c0.5,0,0.9,0.2,1.2,0.6S19.3,8.5,19.1,8.9z"/>
            <circle cx="8.5" cy="19.5" r="1.5"/>
            <circle cx="16.5" cy="19.5" r="1.5"/>
          </svg>
        </NavLink>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen( false )} className="relative z-50">
        <DialogBackdrop transition className="fixed inset-0 bg-black/50 duration-500 ease-out data-closed:opacity-0" />
        <div className="w-screen inset-0 fixed flex items-end justify-center">
          <DialogPanel className="w-screen p-10 sm:px-35 bg-neutral-50 duration-300 data-closed:translate-y-25" transition>
            <Form>
              <fieldset>
                <label htmlFor="search" className="block">
                  <input onChange={handleSearchInputChange} defaultValue={search || ''} id="search" name="search" type="text" placeholder="Cardholder 001" className="peer w-full p-3.5 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]" />
                </label>
              </fieldset>
            </Form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default StoreControls;