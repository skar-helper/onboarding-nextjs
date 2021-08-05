import { useEntry } from "@/lib/swr-hooks";
import { useRouter } from "next/router";

export function Form1() {
  const router = useRouter();
  const id = router.query.id?.toString();
  const { data } = useEntry(id);
  console.log(data);

  return (
    <form>
      <p>
        Please fill-in these fields. We will populate the forms for you. You can
        review the forms before signing.
      </p>
      <p>
        This data will be stored in your personal file in Skar Audio database.
      </p>

      <div className="card my-2">
        <div className="card-header">Personal Data</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="first_name" />
          </div>

          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="last_name" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>

      <div className="card my-2">
        <div className="card-header">Address</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="address1" className="form-label">
              Address Line 1
            </label>
            <input type="text" className="form-control" id="address1" />
          </div>

          <div className="mb-3">
            <label htmlFor="zip" className="form-label">
              Postal Code (zip)
            </label>
            <input type="text" className="form-control" id="zip" />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
