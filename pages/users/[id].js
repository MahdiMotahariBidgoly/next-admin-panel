import Loading from "@/components/Loading";
import DeleteUser from "@/components/user/Delete";
import { handleError } from "@/lib/helper";
import { useRouter } from "next/router";
import useSWR  from "swr";

const showUser = () => {
    const router = useRouter()
    router.query.id

    const { data, error } = useSWR(router.query.id && `/global?url=/users/${router.query.id}`)

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
            <h4 className="fw-bold">کاربر : {data.name}</h4>
        </div>
        <div>
            <div className="row gy-4">
                <div className="col-md-3">
                    <label className="form-label">نام</label>
                    <input type="text" className="form-control" disabled placeholder={data.name} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">ایمیل</label>
                    <input type="text" className="form-control" disabled placeholder={data.email} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">شماره تماس</label>
                    <input type="text" className="form-control" disabled placeholder={data.cellphone} />
                </div>
            </div>
            </div>
            <DeleteUser id={data.id} />
    </>
     );
}
 
export default showUser;