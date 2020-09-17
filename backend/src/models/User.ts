import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column()
  firstName!: string

  @Column()
  secondName!: string

  @Column()
  email!: string

  @Column({ type: "varchar", length: 15 })
  phone!: string

  @Column({ nullable: false })
  passwordHash!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date
}

