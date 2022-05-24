import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Length,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from "sequelize-typescript";

@Table
class User extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  id!: number;

  @Column
  @Length({ max: 40 })
  lastname!: string;

  @Column
  @Length({ max: 40 })
  firstname!: string;

  @Column
  @Unique
  @Length({ max: 60 })
  email!: string;

  @Column({ type: DataType.CHAR })
  @Length({ max: 60 })
  password!: string;

  @Column
  @Length({ max: 300 })
  avatar!: string;

  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
  @DeletedAt
  deletedAt!: Date;
}
