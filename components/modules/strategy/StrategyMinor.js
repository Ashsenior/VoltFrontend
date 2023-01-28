import { Link, Button } from "@mui/material";
import React from "react";
import { Biotech, Home } from "@mui/icons-material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useRouter } from "next/router";

const StrategyMinor = ({ strategy }) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow overflow-hidden">
      <ul role="list" className="divide-y divide-gray-200">
        {strategy?.map((position) => (
          <li key={position.id}>
            <a
              href="#"
              className="border-l-x-4 border-green-200 block hover:bg-gray-100"
            >
              <div className="px-3 py-3 sm:px-3">
                <div
                  className="flex items-center justify-between"
                  onClick={() =>
                    router.push({
                      pathname: `/module/strategy/${position?.details?.slug}`,
                    })
                  }
                >
                  <p className="text-lg font-medium text-black truncate">
                    {" "}
                    {position?.details?.strategyTitle}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {position?.details?.strategyLeader}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <div className="flex items-center justify-start gap-2">
                        <h3 className="flex items-center rounded-lg ">
                          <Button
                            className="text-green-700 bg-green-50"
                            disableRipple
                            component="a"
                            startIcon={<LocalGroceryStoreIcon />}
                          >
                            {position?.subs?.marketing} Marketing
                          </Button>
                        </h3>
                        <h3 className="flex items-center rounded-lg p-1">
                          <Button
                            className="text-green-700 bg-green-50"
                            disableRipple
                            component="a"
                            startIcon={<MonetizationOnIcon />}
                          >
                            {position?.subs?.sales} Sales
                          </Button>
                        </h3>
                        <h3 className="flex items-center rounded-lg p-1">
                          <Button
                            className="text-green-700 bg-green-50"
                            disableRipple
                            component="a"
                            startIcon={<Biotech />}
                          >
                            {position?.subs?.research} Research
                          </Button>
                        </h3>
                      </div>
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p className="px-2 mx-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {position.details?.points} Volts
                    </p>
                    <p>
                      Start Date {position.details?.approxStartDate}
                      <time dateTime={position.closeDate}>
                        {position.closeDateFull}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrategyMinor;
