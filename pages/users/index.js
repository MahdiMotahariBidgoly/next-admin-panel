import Loading from '@/components/Loading';
import UserList from '@/components/user/List';
import { handleError } from '@/lib/helper';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const UsersPage = () => {
  const [pageIndex, setPageIndex] = useState(0);


  const Chart = dynamic(() => import('@/components/Chart'), { ssr: false });

  const { data, error } = useSWR(`/global?url=/users&page=${pageIndex}`)

  console.log(data);

  if (error) {
    toast.error(handleError(error))
  }

  if (!data) {
    return <Loading />
  }

  return (
    <>
      <div
        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">کاربران</h4>
        <Link href="/users/create" legacyBehavior>
        <a className='btn btn-sm btn-outline-dark'>ایجاد کاربر</a>
        </Link>
      </div>
      {/* <Chart data={data} /> */}

      <UserList data={data} />

      <nav className="d-flex justify-content-center mt-5">
                    <ul className="pagination">
                      {data.meta.links.slice(1, -1).map((link, index) => (
                            <li key={index} className={ link.active ? "page-item active" : "page-item"}>
                              <button className="page-link" onClick={()=>setPageIndex(link.label)} >
                                {link.label}
                              </button>
                            </li>
                          ))}
                    </ul>
                    </nav>
     
    </>
  )
}

export default UsersPage;