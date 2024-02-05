import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { useEffect, useLayoutEffect, useState } from "react";

/**
 * A hook that knows whether the user is authenticated or not,
 * also knows whether the current session is valid or not.
 * @returns Array -> [isAuthenticated, isSessionValid]
 */
const useIsAuth = () => {
  let accessToken = localStorage.getItem("access")
    ? JSON.parse(localStorage.getItem("access") ?? "")
    : null;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSessionValid, setIsSessionValid] = useState<boolean | null>(null);

  /**
   * * I used here useLayoutEffect over useEffect because I don't want to show anything
   * * until the check-up occurred, also wants it to check before the render completes
   */
  useEffect(() => {
    const checkAuth = async () => {
      let accessToken = localStorage.getItem("access");

      if (accessToken) {
        try {
          setIsAuthenticated(true);
          const user: any = jwtDecode(accessToken);
          const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

          if (!isExpired) {
            setIsSessionValid(true);
          } else {
            setIsSessionValid(false);
          }
        } catch (error) {
          console.error("Error decoding JWT:", error);
          setIsAuthenticated(false);
          setIsSessionValid(false);
        }
      } else {
        setIsAuthenticated(false);
        setIsSessionValid(false);
      }
    };

    checkAuth();
  }, []);

  return [isAuthenticated, isSessionValid];
};

export default useIsAuth;
