import axios from 'axios'
import { useEffect, useState } from 'react'
import logoWritted from '../../assets/imgs/logo-coffee-delivery-writted.svg'
import { CartButtom, HeaderContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

interface LocationType {
  lat: number
  lon: number
}

interface AddressType {
  city: number
  state: number
}

export function Header() {
  const [location, setLocation] = useState<LocationType | null>(null)
  const [addressLocation, setAddressLocation] = useState<AddressType | null>(
    null,
  )

  async function getPermisionAndLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      setLocation({
        lat: latitude,
        lon: longitude,
      })
    })
  }

  async function getAddress() {
    if (location) {
      await axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lon}
          `,
        )
        .then((res: any) => {
          const { town, state } = res.data.address

          setAddressLocation({
            city: town,
            state,
          })
        })
        .catch(() => setAddressLocation((state) => state))
    }
  }

  useEffect(() => {
    getPermisionAndLocation()
  }, [])

  useEffect(() => {
    if (location) {
      getAddress()
    }
  }, [location])

  return (
    <HeaderContainer>
      <img src={logoWritted} alt="" />
      <div>
        {!!addressLocation && (
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>{addressLocation.city}, </span>
            <span>{addressLocation.state}</span>
          </LocationContainer>
        )}
        <NavLink to="/payment">
          <CartButtom>
            <ShoppingCart size={22} weight="fill" />
          </CartButtom>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
