import * as Toast from '@radix-ui/react-toast';

export default function Toaster() {
 return ( 
  <>
 <Toast.Provider>
    <Toast.Root>
      <Toast.Title />
      <Toast.Description />
      <Toast.Action altText="hello you" />
      <Toast.Close />
    </Toast.Root>

    <Toast.Viewport />
  </Toast.Provider>
  </>
  )

};

//https://www.radix-ui.com/docs/primitives/components/toast