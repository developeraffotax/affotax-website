'use client'

import '../../globals.css';
//import '../globals.css';

import React, { useEffect, useState } from 'react';

import { LaptopOutlined, NotificationOutlined, UserOutlined, FormOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { triggerFocus } from 'antd/es/input/Input';
const { Header, Content, Footer, Sider } = Layout;
import { useRouter, usePathname } from 'next/navigation';
import { LogoutForm } from '@/actions/auth';
import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";








export default function RootLayout({ children }) {

  const [isSider, setIsSider] = useState(true)

    const router = useRouter()
    const pathname = usePathname()

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([])




  // useEffect(() => {
  //   console.log(pathname)



  // }, [])
    // const items1 = ['1', '2', '3'].map((key) => ({
    //     key,
    //     label: `nav ${key}`,
    //   }));


      // const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
      //   const key = String(index + 1);
      //   return {
      //     key: `sub${key}`,
      //     icon: React.createElement(icon),
      //     label: `subnav ${key}`,
      //     children: new Array(4).fill(null).map((_, j) => {
      //       const subKey = index * 4 + j + 1;
      //       return {
      //         key: subKey,
      //         label: `option${subKey}`,
      //       };
      //     }),
      //   };
      // });




    const items2 = [
      {
            key: `blog`,
            
            icon: React.createElement(UserOutlined),
            label: `Blogs`,
            children: [ 
              {
              key: 'blog1',
              label: 'Create a new Blog' ,
              onClick		: () => {

                setDefaultSelectedKeys(['blog1'])
                setDefaultOpenKeys(['blog'])
                router.push('/admin/create-blog')
              }
            },
          
            {
              key: 'blog2',
              label: 'View Blogs' ,
              onClick		: () => {


                setDefaultSelectedKeys(['blog2'])
                setDefaultOpenKeys(['blog'])

                router.push('/admin/view-blogs')
              }
            }]
          },


          {
            key: `page`,
            
            icon: React.createElement(FormOutlined),
            label: `Pages`,
            children: [ 
              {
              key: 'section',
              label: 'Create a new Page (Who We Help)' ,
              children: [

                {
                  key: 'section0',
                  label: ' Create Page',
                  onClick		: () => {
                    setDefaultSelectedKeys(['section0'])
                setDefaultOpenKeys(['page', 'section'])

                    router.push('/admin/create-page/create')
                  }
                },


                {
                  key: 'section1',
                  label: ' Hero Section',
                  onClick		: () => {
                    setDefaultSelectedKeys(['section1'])
                setDefaultOpenKeys(['page', 'section'])

                    router.push('/admin/create-page/hero-section')
                  }
                },

                {
                  key: 'section2',
                  label: ' Second Section',
                  onClick		: () => {
                    setDefaultSelectedKeys(['section2'])
                setDefaultOpenKeys(['page', 'section'])

                    router.push('/admin/create-page/second-section')
                  }
                },

                {
                  key: 'section3',
                  label: ' Third Section',
                  onClick		: () => {
                    setDefaultSelectedKeys(['section3'])
                setDefaultOpenKeys(['page', 'section'])

                    router.push('/admin/create-page/third-section')
                  }
                },

                {
                  key: 'section4',
                  label: ' Fourth Section',
                  onClick		: () => {
                    setDefaultSelectedKeys(['section4'])
                    setDefaultOpenKeys(['page', 'section'])

                    router.push('/admin/create-page/fourth-section')
                  }
                },

                {
                  key: 'section5',
                  label: ' Fifth Section',
                  onClick		: () => {
                    setDefaultSelectedKeys(['section5'])
                    setDefaultOpenKeys(['page', 'section'])


                    router.push('/admin/create-page/fifth-section')
                  }
                }


              ],


              // onClick		: () => router.push('/admin/create-page')
            },






          
            {
              key: 'sub4',
              label: 'View Pages (Who We Help)' ,
              onClick		: () => router.push('/admin/view-pages')
            }]
          }
    ]























      const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();




      
	return (
		
            <Layout className='w-[100vw] h-[100vh]'   >
              
      <Header
        
        className=''
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      > 
      
        <Link href="/" className='scale-90'>
                <svg width="150" viewBox="0 0 280.00000000000006 72.06504786422265" className="css-1j8o68f"> <defs id="SvgjsDefs1925"></defs> <g id="SvgjsG1926" featurekey="nameFeature-0" transform="matrix(1.6205390551742131,0,0,1.6205390551742131,-0.25928677428647584,-24.8266624671191)" fill="#ff7f45"> <path d="M17.44 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M10.4 29.48 l5.08 0 l-2.52 -7.12 z M28.997000000000003 15.52 l18.2 0 l0 5.56 l-12.2 0 l0 3.92 l9.8 0 l0 5.56 l-9.8 0 l0 9.44 l-6 0 l0 -24.48 z M51.394000000000005 15.52 l18.2 0 l0 5.56 l-12.2 0 l0 3.92 l9.8 0 l0 5.56 l-9.8 0 l0 9.44 l-6 0 l0 -24.48 z M84.71100000000001 34.64 c4.36 0 6.6 -2.8 6.6 -6.88 c0 -4.32 -2.4 -6.88 -6.6 -6.88 c-4.4 0 -6.6 2.8 -6.6 6.88 c0 4.24 2.44 6.88 6.6 6.88 z M84.71100000000001 40.2 c-7.52 0 -12.6 -5.12 -12.6 -12.44 c0 -7.56 5.32 -12.44 12.6 -12.44 c7.56 0 12.6 5.08 12.6 12.44 c0 7.6 -5.28 12.44 -12.6 12.44 z M100.388 15.52 l20.4 0 l0 5.56 l-7.2 0 l0 18.92 l-6 0 l0 -18.92 l-7.2 0 l0 -5.56 z M139.865 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M132.82500000000002 29.48 l5.08 0 l-2.52 -7.12 z M160.94200000000004 32.64 l-5 7.36 l-7 0 l8.52 -12.52 l-8.12 -11.96 l7 0 l4.6 6.8 l4.6 -6.8 l7 0 l-8.08 11.96 l8.48 12.52 l-7 0 z"></path> </g> <g id="SvgjsG1927" featurekey="sloganFeature-0" transform="matrix(0.9667506656062486,0,0,0.9667506656062486,-1.102095629715984,52.594690509953224)" fill="#fcfeff"> <path d="M4.14 13.26 l0 6.74 l-3 0 l0 -12.24 l3 0 l3.82 6.76 l3.82 -6.76 l3 0 l0 12.24 l-3 0 l0 -6.74 l-2.32 3.98 l-3 0 z M27.4495 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M23.929499999999997 14.74 l2.54 0 l-1.26 -3.56 z M35.619 7.76 l3 0 l0 5.74 l3.94 -5.74 l3.72 0 l-4.28 6.12 l4.44 6.12 l-3.68 0 l-4.14 -5.76 l0 5.76 l-3 0 l0 -12.24 z M50.0485 7.76 l3 0 l0 12.24 l-3 0 l0 -12.24 z M65.898 7.76 l3 0 l0 12.24 l-3 0 l-4.8 -7.16 l0 7.16 l-3 0 l0 -12.24 l3 0 l4.8 7.16 l0 -7.16 z M84.8075 12.5 l0 6.8 c-1.42 0.54 -3.2 0.84 -4.72 0.84 c-3.9 0 -6.52 -2.34 -6.52 -6.2 c0 -4.22 3.14 -6.28 6.98 -6.28 c0.26 0 0.54 0 0.86 0.02 c0.3 0.02 0.62 0.06 0.96 0.08 c0.62 0.08 1.24 0.16 1.84 0.34 l0 3.06 c-0.22 -0.1 -0.46 -0.18 -0.74 -0.26 c-0.3 -0.06 -0.6 -0.12 -0.92 -0.18 c-0.64 -0.12 -1.32 -0.16 -1.98 -0.16 c-2.54 0 -4 0.78 -4 3.38 c0 2.54 1.34 3.3 3.62 3.3 c0.24 0 0.5 -0.02 0.78 -0.04 c0.26 -0.02 0.54 -0.04 0.84 -0.06 l0 -1.86 l-2.6 0 l0 -2.78 l5.6 0 z M95.9665 7.76 l10.2 0 l0 2.78 l-3.6 0 l0 9.46 l-3 0 l0 -9.46 l-3.6 0 l0 -2.78 z M118.09599999999999 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M114.576 14.74 l2.54 0 l-1.26 -3.56 z M131.0255 16.32 l-2.5 3.68 l-3.5 0 l4.26 -6.26 l-4.06 -5.98 l3.5 0 l2.3 3.4 l2.3 -3.4 l3.5 0 l-4.04 5.98 l4.24 6.26 l-3.5 0 z M155.62449999999998 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M152.10449999999997 14.74 l2.54 0 l-1.26 -3.56 z M163.79399999999998 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M177.38349999999997 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M196.433 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M196.433 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z M210.38249999999996 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M214.92249999999999 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M226.652 20 l-4.3 0 l0 -12.24 l4.3 0 c3.74 0 6.3 2.44 6.3 6.12 c0 3.78 -2.7 6.12 -6.3 6.12 z M225.35199999999998 10.54 l0 6.68 l1.3 0 c2.12 0 3.3 -1.34 3.3 -3.34 c0 -0.46 -0.06 -0.88 -0.18 -1.3 c-0.52 -1.46 -1.66 -2.04 -3.12 -2.04 l-1.3 0 z M245.1815 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M241.6615 14.74 l2.54 0 l-1.26 -3.56 z M262.37100000000004 13.719999999999999 c0.88 0.62 1.4 1.54 1.4 2.62 c0 2.08 -1.92 3.66 -3.92 3.66 l-6.5 0 l0 -12.24 l6.1 0 c1.6 0 2.92 0.86 3.62 2.28 c0.2 0.46 0.3 0.92 0.3 1.4 c0 0.9 -0.36 1.64 -1 2.28 z M256.351 10.54 l0 1.96 l3.1 0 c0.52 0 0.92 -0.5 0.92 -1 c0 -0.52 -0.38 -0.96 -0.92 -0.96 l-3.1 0 z M256.351 15.280000000000001 l0 1.94 l3.5 0 c0.54 0 0.92 -0.44 0.92 -0.96 c0 -0.26 -0.1 -0.5 -0.28 -0.7 c-0.18 -0.18 -0.4 -0.28 -0.64 -0.28 l-3.5 0 z M277.3605 17.22 l0 2.78 l-9.1 0 l0 -12.24 l3 0 l0 9.46 l6.1 0 z M281.66999999999996 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z"></path> </g> </svg>
              </Link>
        <h2 className='text-gray-200 font-poppins text-lg tracking-wide'>Welcome to Admin Panel | Affotax</h2>
        <div>
          <form action={LogoutForm}>
          <button className='p-0 w-28 h-10 text-center text-white font-poppins m-0 flex items-center justify-center rounded-md   bg-gradient-to-r from-amber-500 to-orange-500 active:scale-95'>
            Logout
          </button>
          </form>
        </div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            
            minWidth: 0,
          }}
        /> */}



      </Header>
      <Content
        className='h-full '
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          {
            pathname.split('/').slice(1).map((el, index) => {
              return <Breadcrumb.Item>{el.charAt(0).toUpperCase() + el.slice(1)}</Breadcrumb.Item>
            })
          }
            
          
        </Breadcrumb>

          

        <Layout
          className='w-full h-full '
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >


          <Sider
            collapsed={!isSider}
            
            className=''
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"

              theme='light'
               defaultSelectedKeys={defaultSelectedKeys}
               defaultOpenKeys={defaultOpenKeys}

              // selectedKeys={['sec1']}
              // openKeys={['2', 'sub3']}

              style={{
                height: '100%',
              }}
              
              items={items2}
            />
          </Sider>
          <Content
          className='h-full'
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
           {children}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          zIndex: 999,
          textAlign: 'center',
        }}
      >
        {!isSider && <RiMenuUnfoldLine className='scale-125 text-black/75  hover:text-orange-400 hover:scale-150 transition-all cursor-pointer border  rounded-sm shadow-sm shadow-black/20' onClick={() => setIsSider(true)}/>}
        {isSider && <RiMenuUnfold2Line className='scale-125 text-black/75  hover:text-orange-400 hover:scale-150 transition-all cursor-pointer border  rounded-sm shadow-sm shadow-black/20' onClick={() => setIsSider(false)}/>}
        
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
			
	);
}
