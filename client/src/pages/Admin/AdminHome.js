import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            A blood bank is a critical healthcare facility where blood and its
            components are collected, stored, and distributed for medical use.
            These banks provide a safe and reliable supply of blood to hospitals
            and clinics, supporting patients who require transfusions due to
            surgeries, trauma, cancer treatments, or conditions like anemia and
            hemophilia. Blood is collected from voluntary donors, who undergo
            screening and testing to ensure that the blood is free from
            infectious diseases, such as HIV or hepatitis. Once collected, blood
            is processed into its various components, including red blood cells,
            plasma, platelets, and cryoprecipitate, each serving different
            medical needs. For example, red blood cells are primarily used for
            patients with anemia or those undergoing surgery, while platelets
            are vital for cancer patients or those with clotting disorders. The
            blood is then stored at specific temperatures to maintain its
            viability until it is needed. A key aspect of blood bank operations
            is blood typing and matching. Donors' blood is categorized into
            different types—A, B, AB, and O—along with Rh factor (positive or
            negative). The blood is carefully matched to ensure compatibility
            with the recipient’s blood type to prevent dangerous transfusion
            reactions. Blood banks are essential in emergencies, natural
            disasters, and routine medical care, making them an indispensable
            part of modern healthcare systems.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
