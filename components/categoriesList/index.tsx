import {
  ButtonBase,
  Card,
  CardContent,
  Icon,
  Link,
  Typography,
} from "@material-ui/core";
import classes from "./style.module.css";
import NextLink from "next/link";
import { normalize } from "../../lib/normalize";

export default function CategoriesList({
  categories,
}: {
  categories: {
    name: string;
    icon: string;
    href: string;
  }[];
}) {
  return (
    <div className={classes.container}>
      {categories.map((category) => (
        <Card key={category.name} className={classes.cardOuter}>
          <NextLink href={category.href} passHref>
            <ButtonBase>
              <CardContent className={classes.cardInner}>
                <Icon>{category.icon}</Icon>
                <Typography variant="h6" className={classes.text}>
                  <Link>{category.name}</Link>
                </Typography>
              </CardContent>
            </ButtonBase>
          </NextLink>
        </Card>
      ))}
    </div>
  );
}
