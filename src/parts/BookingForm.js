import { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import Button from "elements/Button";
import InputDate from "../elements/Form/InputDate/index";
import InputNumber from "../elements/Form/InputNumber/index";
import { useSelector, useDispatch } from "react-redux";
import { checkoutBookingAction } from "store/reducer/checkout/checkoutActions";

// class BookingForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         duration: 1,
//         date: {
//           startDate: new Date(),
//           endDate: new Date(),
//           key: "selection",
//         },
//       },
//     };
//   }

//   updateData = (e) => {
//     this.setState({
//       ...this.state,
//       data: {
//         ...this.state.data,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { data } = this.state;

//     if (prevState.data.date !== data.date) {
//       const startDate = new Date(data.date.startDate);
//       const endDate = new Date(data.date.endDate);
//       const countDuration = new Date(endDate - startDate).getDate();

//       this.setState({
//         ...this.state,
//         data: {
//           ...this.state.data,
//           duration: countDuration,
//         },
//       });
//     }

//     if (prevState.data.duration !== data.duration) {
//       const startDate = new Date(data.date.startDate);
//       const endDate = new Date(
//         startDate.setDate(startDate.getDate() + +data.duration - 1)
//       );
//       this.setState({
//         ...this.state,
//         data: {
//           ...this.state.data,
//           date: {
//             ...this.state.data.date,
//             endDate: endDate,
//           },
//         },
//       });
//     }
//   }

//   startBooking = () => {
//     const { data } = this.state;
//     this.props.history.push("/checkout");
//   };

//   render() {
//     const { data } = this.state;
//     const { itemDetails } = this.props;

//     return (
//       <div className="card bordered" style={{ padding: "60px 80px" }}>
//         <h4 className="mb-3">Start Booking</h4>
//         <h5 className="h2 text-teal mb-4">
//           ${itemDetails.price}{" "}
//           <span className="text-gray-500 font-weight-light">
//             per {itemDetails.unit}
//           </span>
//         </h5>

//         <label htmlFor="duration">How long you will stay?</label>
//         <InputNumber
//           max={30}
//           suffix={" night"}
//           isSuffixPlural
//           onChange={this.updateData}
//           name="duration"
//           value={data.duration}
//         />

//         <label htmlFor="date">Pick a date</label>
//         <InputDate onChange={this.updateData} name="date" value={data.date} />

//         <h6
//           className="text-gray-500 font-weight-light"
//           style={{ marginBottom: 40 }}
//         >
//           You will pay{" "}
//           <span className="text-gray-900">
//             ${itemDetails.price * data.duration} USD
//           </span>{" "}
//           per{" "}
//           <span className="text-gray-900">
//             {data.duration} {itemDetails.unit}
//           </span>
//         </h6>

//         <Button
//           className="btn"
//           hasShadow
//           isPrimary
//           isBlock
//           onClick={this.startBooking}
//         >
//           Continue to Book
//         </Button>
//       </div>
//     );
//   }
// }

// BookingForm.propTypes = {
//   itemDetails: propTypes.object,
//   startBooking: propTypes.func,
// };

// export default withRouter(BookingForm);

const BookingForm = (props) => {
  const checkout = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const { itemDetails } = props;

  const initialData = {
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  const [data, setData] = useState(initialData);

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const prevData = useRef(data);

  useEffect(() => {
    // Mengakses data sebelumnya melalui prevData.current
    const prevDataValue = prevData.current;

    if (prevDataValue.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();

      setData((prevData) => ({
        ...prevData,
        duration: countDuration,
      }));
    }

    if (prevDataValue.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );

      setData((prevData) => ({
        ...prevData,
        date: {
          ...prevData.date,
          endDate: endDate,
        },
      }));
    }

    // Setelah selesai memproses efek, perbarui prevData.current
    prevData.current = data;
  }, [data]);

  const startBooking = () => {
    const payload = {
      _id: itemDetails._id,
      ...data,
    };
    dispatch(checkoutBookingAction(payload));
    props.history.push("/checkout");
  };

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
};

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
