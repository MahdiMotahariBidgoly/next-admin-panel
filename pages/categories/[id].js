import Loading from "@/components/Loading";
import DeleteCategory from "@/components/category/Delete";
import { handleError } from "@/lib/helper";
import { useRouter } from "next/router";
import useSWR  from "swr";

const showCategory = () => {
    const router = useRouter()
    router.query.id

    const { data, error } = useSWR(router.query.id && `/global?url=/categories/${router.query.id}`)

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
            <h4 className="fw-bold">دسته بندی: {data.name}</h4>
        </div>
        <div>
            <div className="row gy-4">
                <div className="col-md-3">
                    <label className="form-label">نام</label>
                    <input type="text" className="form-control" disabled placeholder={data.name} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">توضیحات</label>
                    <input type="text" className="form-control" disabled placeholder={data.description} />
                </div>
              
            </div>
            </div>
            <DeleteCategory id={data.id} />
    </>
     );
}
 
export default showCategory;